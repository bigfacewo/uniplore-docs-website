### 组件介绍
**“分组”（Group By）**控件用于对数据进行分组聚集操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“分组”（Group By）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/group-by/param.png) ](/img/aistudio/feature-engineering/group-by/param.png)

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
      选择分组属性，可以设置多个分组属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分组配置</td> 
      <td>
      勾选列，在下方选择需要进行的操作
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“分组”（Group By）**控件进行分组操作，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/group-by/workflow.png) ](/img/aistudio/feature-engineering/group-by/workflow.png)

案例中加载 iris 数据集，其他控件使用默认参数配置。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/group-by/workflow-result.png ](/img/aistudio/feature-engineering/group-by/workflow-result.png)