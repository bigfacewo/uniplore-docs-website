### 组件介绍
**“去重”（Unique）**控件可用于进行去重操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“去重”（Unique）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/preprocess/unique/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>分组属性</td> 
      <td>
      选择分组属性，可以不选择，也可多选
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>去重配置</td> 
      <td>
      去重后是否保留数据，保留哪一条数据：<br/>
      &emsp;&emsp;Last instance：重复数据的最后一条<br/>
      &emsp;&emsp;First instance：重复数据的第一条<br/>
      &emsp;&emsp;Drop：删除重复数据
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“去重”（Unique）**控件对数据集进行去重操作，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
![workflow](/img/aistudio/preprocess/unique/workflow.png)

案例中加载 iris 数据集，其余控件使用默认参数配置。案例中控件的配置以及执行结果如下图所示。      
![workflow-result](/img/aistudio/preprocess/unique/workflow-result.png)