### 组件介绍
**“合并数据”（Merge Data）**控件用于根据用户所选属性合并两个数据集，首先，获取来自一个数据集的合并属性并从另一个合并属性中搜索匹配值。如果根据合并属性从另一个数据集中找到多个实例，则从可用的合并属性中删除该属性。

<hr/>

- 输入：
  - data：数据集
  - data: 另一个数据集
- 输出：
  - data：合并后的数据集

<hr/>


### 页面介绍
点击**“合并数据”（Merge Data）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/merge-data/param.png) ](/img/aistudio/preprocess/merge-data/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>数据集</td> 
      <td>
      一个数据集信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>附加数据集</td> 
      <td>
      另一个数据集信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>合并方式</td> 
      <td>
      合并方式：<br/>
      &emsp;&emsp;从附加数据集附加列：输出数据集的所有实例，且实例后追加与另一个数据集相匹配的信息，如果找不到匹配信息，追加未知值。<br/>
      &emsp;&emsp;匹配行：与a类似，但没有匹配的实例将不输出。<br/>
      &emsp;&emsp;连接表，合并行：输出来自两个输入的所有实例，即使可能找不到匹配，如果找不到匹配，分配未知值。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用两个**“加载文件”（File）**控件加载不同的两个数据集，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“合并数据”（Merge Data）**控件对两个数据集进行合并，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。  
[ ![](/img/aistudio/preprocess/merge-data/workflow.png) ](/img/aistudio/preprocess/merge-data/workflow.png)

案例中加载 car 以及 wine 数据集，使用“连接表，合并行”的方法合并数据集。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/preprocess/merge-data/workflow-result.png ](/img/aistudio/preprocess/merge-data/workflow-result.png)