### 组件介绍
**“关联规则”（Association Rules）** 控件实现了 FP-growth 频繁模式挖掘算法，从输入数据中归纳关联规则。对于分类规则的推导，该控件会跳过结果不属于类取值范围的规则。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：符合判定条件的数据示例

<hr/>

### 页面介绍
点击**“关联规则”（Association Rules）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/associate/association-rules/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>查找关联规则</td> 
      <td>
      向用户提供关联规则的查找条件。如果选中"归纳分类（项->类别）规则"被勾选，那么控件将只生成在规则的右侧（后继）具有类值的规则。<br/>
      &emsp;&emsp;最小支持度：规则覆盖的数据的最小占比。<br/> 
      &emsp;&emsp;最小置信度：在符合左侧条件（先导）的样例中，符合右侧结果的样例（后继）在其中的占比。 <br/> 
      &emsp;&emsp;最大规则数：用来限制算法生成的规则的数量。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>过滤规则</td>    
      <td>
      先导：<br/>
      &emsp;&emsp;包含：用户可以使用空格分隔的正则表达式过滤先导项。<br/>
      &emsp;&emsp;最小项：在先导中项需要满足的词项出现的最小次数。<br/>
      &emsp;&emsp;最大项：在先导中项需要满足的词项出现的最大次数。 <br/>
      后继：<br/>
      &emsp;&emsp;包含：用户可以使用空格分隔的正则表达式过滤先导项。<br/>
      &emsp;&emsp;最小项：在后继中项需要满足的词项出现的最小次数。<br/>
      &emsp;&emsp;最大项：在后继中项需要满足的词项出现的最大次数。
      </td> 
      <td></td>
  </tr>
</table>

#### 关联规则表
设置参数后，点击“查找规则”按钮，即可根据当前指定设置从输入数据中归纳关联规则。  
![interaction](/img/aistudio/associate/association-rules/interaction.png)

该表包含以下列：
<table>
  <tr>
    <th>列名</th>
    <th width="650">说明</th>
  </tr>
  <tr>
      <td>支持度</td> 
      <td>
      项集或者规则在数据集中出现的频率，确定规则可以用于给定数据集的频繁程度
      </td> 
  </tr>
  <tr>
      <td>置信度</td>    
      <td>
      表明项集或规则被发现为真的概率
      </td> 
  </tr>
  <tr>
      <td>覆盖率</td> 
      <td>
      规则的左侧支持，表示规则可以多久应用一次
      </td> 
  </tr>
  <tr>
      <td>强度</td>    
      <td></td> 
  </tr>
  <tr>
      <td>提升比率</td>    
      <td>置信度与期望置信度之比</td> 
  </tr>
  <tr>
      <td>杠杆率</td>    
      <td>衡量数据集中同时出现X和Y的差异，以及在X和Y在统计上相关的情况下的期望值</td> 
  </tr>
  <tr>
      <td>先导</td>    
      <td></td> 
  </tr>
  <tr>
      <td>后继</td>    
      <td></td> 
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“文件加载”（File）**控件加载数据，使用**“查看数据”（Data Table）**控件查看数据集内容，通过**“关联规则”（Association Rules）**查找满足条件的关联规则。  
![workflow](/img/aistudio/associate/association-rules/workflow.png)

案例中加载 titanic 示例数据集，案例中控件执行结果如下图所示：  
![workflow-result](/img/aistudio/associate/association-rules/workflow-result.png)
